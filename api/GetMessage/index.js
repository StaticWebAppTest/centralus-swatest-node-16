module.exports = async function (context, req) {
  const date = "2023-07-18T05:09:09.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

