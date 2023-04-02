module.exports = async function (context, req) {
  const date = "2023-04-02T22:07:44.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

