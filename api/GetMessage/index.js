module.exports = async function (context, req) {
  const date = "2023-03-19T19:07:38.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

