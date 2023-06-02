module.exports = async function (context, req) {
  const date = "2023-06-02T19:06:55.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

