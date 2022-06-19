module.exports = async function (context, req) {
  const date = "2022-06-19T13:18:56.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

