module.exports = async function (context, req) {
  const date = "2025-11-27T16:17:17.595Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

