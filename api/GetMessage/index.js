module.exports = async function (context, req) {
  const date = "2024-12-03T21:11:46.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

