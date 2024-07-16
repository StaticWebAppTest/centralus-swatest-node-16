module.exports = async function (context, req) {
  const date = "2024-07-16T12:19:27.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

