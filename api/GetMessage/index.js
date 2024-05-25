module.exports = async function (context, req) {
  const date = "2024-05-25T00:43:44.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

