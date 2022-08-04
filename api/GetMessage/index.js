module.exports = async function (context, req) {
  const date = "2022-08-04T15:12:56.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

