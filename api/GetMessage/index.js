module.exports = async function (context, req) {
  const date = "2025-11-25T15:15:33.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

