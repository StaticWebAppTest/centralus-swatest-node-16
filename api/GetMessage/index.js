module.exports = async function (context, req) {
  const date = "2024-07-02T19:09:42.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

