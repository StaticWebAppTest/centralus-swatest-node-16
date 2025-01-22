module.exports = async function (context, req) {
  const date = "2025-01-22T13:18:10.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

