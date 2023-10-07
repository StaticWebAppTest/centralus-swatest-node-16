module.exports = async function (context, req) {
  const date = "2023-10-07T00:40:19.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

