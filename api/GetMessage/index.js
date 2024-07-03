module.exports = async function (context, req) {
  const date = "2024-07-03T13:12:56.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

