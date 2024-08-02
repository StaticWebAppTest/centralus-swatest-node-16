module.exports = async function (context, req) {
  const date = "2024-08-02T03:12:03.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

