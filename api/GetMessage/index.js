module.exports = async function (context, req) {
  const date = "2023-10-13T12:17:09.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

