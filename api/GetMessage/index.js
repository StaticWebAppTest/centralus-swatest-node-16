module.exports = async function (context, req) {
  const date = "2023-12-17T16:10:33.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

