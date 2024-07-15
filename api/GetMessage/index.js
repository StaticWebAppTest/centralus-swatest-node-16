module.exports = async function (context, req) {
  const date = "2024-07-15T12:20:17.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

