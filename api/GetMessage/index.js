module.exports = async function (context, req) {
  const date = "2023-03-17T08:12:43.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

