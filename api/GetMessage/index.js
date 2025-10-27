module.exports = async function (context, req) {
  const date = "2025-10-27T07:14:28.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

