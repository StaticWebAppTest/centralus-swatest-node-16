module.exports = async function (context, req) {
  const date = "2025-11-11T09:15:11.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

