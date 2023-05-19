module.exports = async function (context, req) {
  const date = "2023-05-19T20:08:47.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

