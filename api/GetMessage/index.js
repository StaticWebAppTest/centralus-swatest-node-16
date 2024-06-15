module.exports = async function (context, req) {
  const date = "2024-06-15T02:27:00.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

