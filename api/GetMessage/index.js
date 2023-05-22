module.exports = async function (context, req) {
  const date = "2023-05-22T09:09:20.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

