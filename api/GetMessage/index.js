module.exports = async function (context, req) {
  const date = "2024-11-05T23:11:51.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

