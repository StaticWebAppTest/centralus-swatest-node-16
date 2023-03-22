module.exports = async function (context, req) {
  const date = "2023-03-22T10:09:45.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

