module.exports = async function (context, req) {
  const date = "2024-03-15T23:09:33.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

