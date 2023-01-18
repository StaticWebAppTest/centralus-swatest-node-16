module.exports = async function (context, req) {
  const date = "2023-01-18T13:16:46.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

