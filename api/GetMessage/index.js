module.exports = async function (context, req) {
  const date = "2022-11-19T02:47:44.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

