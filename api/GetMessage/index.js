module.exports = async function (context, req) {
  const date = "2023-05-22T05:09:06.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

