module.exports = async function (context, req) {
  const date = "2024-02-25T23:08:59.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

