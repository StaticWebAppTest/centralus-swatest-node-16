module.exports = async function (context, req) {
  const date = "2025-10-25T15:11:28.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

