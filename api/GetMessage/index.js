module.exports = async function (context, req) {
  const date = "2024-03-01T19:07:57.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

