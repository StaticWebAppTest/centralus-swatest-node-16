module.exports = async function (context, req) {
  const date = "2024-10-17T12:22:20.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

