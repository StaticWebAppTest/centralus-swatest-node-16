module.exports = async function (context, req) {
  const date = "2024-08-11T16:12:05.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

