module.exports = async function (context, req) {
  const date = "2024-06-21T21:10:45.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

