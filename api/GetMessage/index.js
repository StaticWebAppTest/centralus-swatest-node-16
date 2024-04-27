module.exports = async function (context, req) {
  const date = "2024-04-27T14:07:23.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

