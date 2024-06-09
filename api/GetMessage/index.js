module.exports = async function (context, req) {
  const date = "2024-06-09T22:09:43.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

