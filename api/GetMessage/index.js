module.exports = async function (context, req) {
  const date = "2024-10-25T09:13:07.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

