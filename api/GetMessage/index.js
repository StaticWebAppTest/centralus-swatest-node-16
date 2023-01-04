module.exports = async function (context, req) {
  const date = "2023-01-04T03:10:19.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

