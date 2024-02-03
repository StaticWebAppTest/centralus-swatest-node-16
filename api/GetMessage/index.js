module.exports = async function (context, req) {
  const date = "2024-02-03T23:09:05.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

