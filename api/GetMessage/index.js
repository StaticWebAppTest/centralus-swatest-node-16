module.exports = async function (context, req) {
  const date = "2024-07-13T03:11:04.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

