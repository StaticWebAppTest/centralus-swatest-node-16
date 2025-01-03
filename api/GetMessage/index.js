module.exports = async function (context, req) {
  const date = "2025-01-03T21:10:17.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

