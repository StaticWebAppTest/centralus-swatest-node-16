module.exports = async function (context, req) {
  const date = "2024-04-27T23:09:32.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

