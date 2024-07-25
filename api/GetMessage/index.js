module.exports = async function (context, req) {
  const date = "2024-07-25T15:10:38.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

