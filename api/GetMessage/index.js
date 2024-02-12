module.exports = async function (context, req) {
  const date = "2024-02-12T12:16:26.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

