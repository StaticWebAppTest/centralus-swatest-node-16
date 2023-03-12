module.exports = async function (context, req) {
  const date = "2023-03-12T12:16:27.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

