module.exports = async function (context, req) {
  const date = "2022-09-13T06:08:32.638Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

