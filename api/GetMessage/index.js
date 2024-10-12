module.exports = async function (context, req) {
  const date = "2024-10-12T08:13:47.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

