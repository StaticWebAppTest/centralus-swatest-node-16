module.exports = async function (context, req) {
  const date = "2023-12-18T05:09:32.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

