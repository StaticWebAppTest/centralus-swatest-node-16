module.exports = async function (context, req) {
  const date = "2025-11-23T20:14:52.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

