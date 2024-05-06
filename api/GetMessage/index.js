module.exports = async function (context, req) {
  const date = "2024-05-06T08:12:53.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

