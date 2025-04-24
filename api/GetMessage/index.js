module.exports = async function (context, req) {
  const date = "2025-04-24T09:14:05.685Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

