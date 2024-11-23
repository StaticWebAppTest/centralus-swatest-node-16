module.exports = async function (context, req) {
  const date = "2024-11-23T19:08:40.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

