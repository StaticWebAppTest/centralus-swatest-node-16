module.exports = async function (context, req) {
  const date = "2024-01-31T21:09:40.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

