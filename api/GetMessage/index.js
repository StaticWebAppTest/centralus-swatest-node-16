module.exports = async function (context, req) {
  const date = "2024-03-23T05:09:12.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

