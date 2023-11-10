module.exports = async function (context, req) {
  const date = "2023-11-10T12:16:17.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

