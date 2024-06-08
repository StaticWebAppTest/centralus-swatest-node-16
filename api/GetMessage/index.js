module.exports = async function (context, req) {
  const date = "2024-06-08T01:54:27.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

