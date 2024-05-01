module.exports = async function (context, req) {
  const date = "2024-05-01T19:09:09.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

