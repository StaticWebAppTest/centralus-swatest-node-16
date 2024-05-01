module.exports = async function (context, req) {
  const date = "2024-05-01T09:10:36.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

