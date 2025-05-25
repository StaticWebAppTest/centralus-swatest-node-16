module.exports = async function (context, req) {
  const date = "2025-05-25T03:15:35.401Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

