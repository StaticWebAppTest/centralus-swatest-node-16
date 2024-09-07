module.exports = async function (context, req) {
  const date = "2024-09-07T09:10:38.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

