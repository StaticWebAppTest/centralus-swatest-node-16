module.exports = async function (context, req) {
  const date = "2022-09-14T13:45:03.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

