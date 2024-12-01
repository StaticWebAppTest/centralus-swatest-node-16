module.exports = async function (context, req) {
  const date = "2024-12-01T16:13:25.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

