module.exports = async function (context, req) {
  const date = "2024-02-23T09:08:54.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

