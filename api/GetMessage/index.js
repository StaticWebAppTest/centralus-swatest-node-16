module.exports = async function (context, req) {
  const date = "2025-11-28T11:12:05.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

