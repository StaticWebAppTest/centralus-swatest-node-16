module.exports = async function (context, req) {
  const date = "2025-12-24T20:15:25.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

