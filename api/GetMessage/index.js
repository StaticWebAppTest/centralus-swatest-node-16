module.exports = async function (context, req) {
  const date = "2024-05-07T08:12:19.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

