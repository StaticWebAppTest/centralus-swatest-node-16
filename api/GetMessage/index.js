module.exports = async function (context, req) {
  const date = "2024-09-24T02:15:35.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

