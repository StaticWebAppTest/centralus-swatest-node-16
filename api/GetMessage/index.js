module.exports = async function (context, req) {
  const date = "2024-05-02T19:07:35.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

