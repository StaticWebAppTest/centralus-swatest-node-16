module.exports = async function (context, req) {
  const date = "2024-07-27T23:11:34.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

