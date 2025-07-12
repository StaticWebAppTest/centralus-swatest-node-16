module.exports = async function (context, req) {
  const date = "2025-07-12T15:13:17.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

