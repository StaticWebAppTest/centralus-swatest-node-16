module.exports = async function (context, req) {
  const date = "2024-12-03T22:12:00.388Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

