module.exports = async function (context, req) {
  const date = "2024-07-01T17:09:47.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

