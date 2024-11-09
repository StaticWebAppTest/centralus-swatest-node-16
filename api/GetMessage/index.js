module.exports = async function (context, req) {
  const date = "2024-11-09T17:08:56.729Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

