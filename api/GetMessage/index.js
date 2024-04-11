module.exports = async function (context, req) {
  const date = "2024-04-11T03:09:58.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

