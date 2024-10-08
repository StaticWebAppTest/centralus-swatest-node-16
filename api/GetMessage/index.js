module.exports = async function (context, req) {
  const date = "2024-10-08T12:22:20.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

