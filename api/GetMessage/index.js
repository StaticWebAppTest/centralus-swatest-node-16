module.exports = async function (context, req) {
  const date = "2023-05-18T02:01:09.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

