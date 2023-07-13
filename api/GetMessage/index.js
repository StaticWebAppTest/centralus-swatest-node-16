module.exports = async function (context, req) {
  const date = "2023-07-13T23:10:13.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

