module.exports = async function (context, req) {
  const date = "2024-07-01T16:12:21.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

