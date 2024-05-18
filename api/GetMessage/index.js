module.exports = async function (context, req) {
  const date = "2024-05-18T23:08:47.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

