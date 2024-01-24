module.exports = async function (context, req) {
  const date = "2024-01-24T08:12:33.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

