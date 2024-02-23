module.exports = async function (context, req) {
  const date = "2024-02-23T12:16:01.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

