module.exports = async function (context, req) {
  const date = "2024-02-02T02:14:47.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

