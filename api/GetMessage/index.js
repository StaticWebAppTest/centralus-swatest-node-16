module.exports = async function (context, req) {
  const date = "2024-03-26T15:08:56.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

