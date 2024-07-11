module.exports = async function (context, req) {
  const date = "2024-07-11T21:11:05.375Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

