module.exports = async function (context, req) {
  const date = "2024-11-20T02:22:25.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

