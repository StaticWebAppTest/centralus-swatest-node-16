module.exports = async function (context, req) {
  const date = "2024-05-14T21:08:40.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

