module.exports = async function (context, req) {
  const date = "2024-07-25T08:14:05.232Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

