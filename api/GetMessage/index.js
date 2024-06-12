module.exports = async function (context, req) {
  const date = "2024-06-12T21:09:46.071Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

