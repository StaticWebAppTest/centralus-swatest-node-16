module.exports = async function (context, req) {
  const date = "2022-11-02T11:11:26.780Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

