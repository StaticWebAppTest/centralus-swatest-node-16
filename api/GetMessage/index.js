module.exports = async function (context, req) {
  const date = "2022-08-19T15:12:47.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

