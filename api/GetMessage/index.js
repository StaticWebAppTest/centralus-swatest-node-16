module.exports = async function (context, req) {
  const date = "2024-02-15T19:07:52.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

