module.exports = async function (context, req) {
  const date = "2025-03-03T09:14:20.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

