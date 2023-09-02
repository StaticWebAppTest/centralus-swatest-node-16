module.exports = async function (context, req) {
  const date = "2023-09-02T22:07:16.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

