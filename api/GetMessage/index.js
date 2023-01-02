module.exports = async function (context, req) {
  const date = "2023-01-02T02:08:54.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

