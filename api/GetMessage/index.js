module.exports = async function (context, req) {
  const date = "2023-07-01T01:05:00.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

