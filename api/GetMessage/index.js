module.exports = async function (context, req) {
  const date = "2023-07-05T05:10:30.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

