module.exports = async function (context, req) {
  const date = "2024-01-24T05:09:40.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

