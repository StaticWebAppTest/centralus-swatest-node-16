module.exports = async function (context, req) {
  const date = "2024-03-15T12:15:43.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

