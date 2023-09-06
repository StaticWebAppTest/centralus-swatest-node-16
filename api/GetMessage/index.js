module.exports = async function (context, req) {
  const date = "2023-09-06T12:16:43.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

