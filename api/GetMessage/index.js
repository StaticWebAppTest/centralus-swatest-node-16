module.exports = async function (context, req) {
  const date = "2023-01-09T17:11:00.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

