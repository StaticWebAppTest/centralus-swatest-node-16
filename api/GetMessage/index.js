module.exports = async function (context, req) {
  const date = "2023-03-16T06:12:43.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

