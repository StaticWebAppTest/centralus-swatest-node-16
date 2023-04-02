module.exports = async function (context, req) {
  const date = "2023-04-02T07:07:22.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

