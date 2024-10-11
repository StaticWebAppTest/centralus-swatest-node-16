module.exports = async function (context, req) {
  const date = "2024-10-11T09:12:35.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

