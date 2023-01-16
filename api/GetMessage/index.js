module.exports = async function (context, req) {
  const date = "2023-01-16T22:09:00.867Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

