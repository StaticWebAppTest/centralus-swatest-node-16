module.exports = async function (context, req) {
  const date = "2024-07-16T16:12:06.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

