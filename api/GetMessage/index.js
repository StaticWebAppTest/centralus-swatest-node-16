module.exports = async function (context, req) {
  const date = "2025-05-03T13:19:59.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

