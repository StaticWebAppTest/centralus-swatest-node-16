module.exports = async function (context, req) {
  const date = "2024-05-08T05:09:43.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

