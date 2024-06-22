module.exports = async function (context, req) {
  const date = "2024-06-22T23:08:51.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

