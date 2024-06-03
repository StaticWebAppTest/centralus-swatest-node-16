module.exports = async function (context, req) {
  const date = "2024-06-03T16:13:04.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

