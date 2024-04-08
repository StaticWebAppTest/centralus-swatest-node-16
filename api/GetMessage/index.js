module.exports = async function (context, req) {
  const date = "2024-04-08T23:09:52.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

