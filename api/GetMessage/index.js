module.exports = async function (context, req) {
  const date = "2022-10-22T09:16:22.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

