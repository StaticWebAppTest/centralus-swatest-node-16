module.exports = async function (context, req) {
  const date = "2023-05-12T12:15:53.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

