module.exports = async function (context, req) {
  const date = "2022-08-09T04:34:05.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

