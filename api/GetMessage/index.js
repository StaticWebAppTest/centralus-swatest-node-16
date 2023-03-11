module.exports = async function (context, req) {
  const date = "2023-03-11T02:05:52.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

