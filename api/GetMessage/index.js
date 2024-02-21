module.exports = async function (context, req) {
  const date = "2024-02-21T19:07:06.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

