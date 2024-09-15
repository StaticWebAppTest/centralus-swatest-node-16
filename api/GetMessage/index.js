module.exports = async function (context, req) {
  const date = "2024-09-15T19:08:22.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

