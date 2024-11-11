module.exports = async function (context, req) {
  const date = "2024-11-11T12:22:22.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

