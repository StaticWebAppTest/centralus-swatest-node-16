module.exports = async function (context, req) {
  const date = "2023-04-13T10:09:23.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

