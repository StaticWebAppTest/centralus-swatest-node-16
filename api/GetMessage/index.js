module.exports = async function (context, req) {
  const date = "2023-04-02T10:08:32.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

