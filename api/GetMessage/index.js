module.exports = async function (context, req) {
  const date = "2025-03-31T17:11:20.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

