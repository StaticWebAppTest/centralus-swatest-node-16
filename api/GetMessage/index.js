module.exports = async function (context, req) {
  const date = "2022-12-20T06:13:20.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

