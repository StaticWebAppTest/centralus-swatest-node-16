module.exports = async function (context, req) {
  const date = "2024-07-13T17:08:29.117Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

