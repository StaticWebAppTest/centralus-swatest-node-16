module.exports = async function (context, req) {
  const date = "2025-05-03T04:15:10.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

