module.exports = async function (context, req) {
  const date = "2025-08-24T13:20:44.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

