module.exports = async function (context, req) {
  const date = "2024-05-26T05:09:05.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

