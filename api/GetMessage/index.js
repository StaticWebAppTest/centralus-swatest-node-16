module.exports = async function (context, req) {
  const date = "2025-09-24T09:14:06.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

