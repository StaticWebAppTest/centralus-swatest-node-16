module.exports = async function (context, req) {
  const date = "2024-05-05T07:08:32.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

