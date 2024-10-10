module.exports = async function (context, req) {
  const date = "2024-10-10T20:12:42.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

