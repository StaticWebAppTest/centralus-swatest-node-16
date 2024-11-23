module.exports = async function (context, req) {
  const date = "2024-11-23T12:21:00.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

