module.exports = async function (context, req) {
  const date = "2024-12-02T23:13:21.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

