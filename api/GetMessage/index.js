module.exports = async function (context, req) {
  const date = "2024-03-19T01:41:18.828Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

