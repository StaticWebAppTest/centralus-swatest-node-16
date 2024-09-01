module.exports = async function (context, req) {
  const date = "2024-09-01T16:13:02.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

