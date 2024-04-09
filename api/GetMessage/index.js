module.exports = async function (context, req) {
  const date = "2024-04-09T21:09:32.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

