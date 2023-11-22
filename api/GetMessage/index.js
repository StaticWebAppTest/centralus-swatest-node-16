module.exports = async function (context, req) {
  const date = "2023-11-22T09:09:36.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

