module.exports = async function (context, req) {
  const date = "2023-10-18T03:09:32.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

