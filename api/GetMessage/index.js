module.exports = async function (context, req) {
  const date = "2025-08-12T09:16:33.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

