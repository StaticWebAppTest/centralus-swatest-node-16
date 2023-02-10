module.exports = async function (context, req) {
  const date = "2023-02-10T19:07:59.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

