module.exports = async function (context, req) {
  const date = "2023-12-22T09:09:24.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

