module.exports = async function (context, req) {
  const date = "2024-06-08T18:12:04.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

