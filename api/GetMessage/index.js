module.exports = async function (context, req) {
  const date = "2023-03-12T23:08:51.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

