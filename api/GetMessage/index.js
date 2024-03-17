module.exports = async function (context, req) {
  const date = "2024-03-17T10:08:27.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

