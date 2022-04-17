module.exports = async function (context, req) {
  const date = "2022-04-17T06:12:54.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

