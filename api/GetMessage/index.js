module.exports = async function (context, req) {
  const date = "2025-03-25T09:13:43.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

