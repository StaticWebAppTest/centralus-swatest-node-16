module.exports = async function (context, req) {
  const date = "2023-12-14T08:12:26.155Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

