module.exports = async function (context, req) {
  const date = "2024-01-01T16:11:05.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

