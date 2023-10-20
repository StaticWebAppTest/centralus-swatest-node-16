module.exports = async function (context, req) {
  const date = "2023-10-20T00:41:01.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

