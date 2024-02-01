module.exports = async function (context, req) {
  const date = "2024-02-01T12:16:02.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

