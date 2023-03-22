module.exports = async function (context, req) {
  const date = "2023-03-22T09:09:21.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

