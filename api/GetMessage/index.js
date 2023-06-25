module.exports = async function (context, req) {
  const date = "2023-06-25T23:09:39.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

