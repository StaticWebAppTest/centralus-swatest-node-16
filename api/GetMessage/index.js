module.exports = async function (context, req) {
  const date = "2024-05-17T08:12:46.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

