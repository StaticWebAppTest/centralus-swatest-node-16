module.exports = async function (context, req) {
  const date = "2024-04-12T23:07:02.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

