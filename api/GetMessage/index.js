module.exports = async function (context, req) {
  const date = "2024-10-06T14:09:27.872Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

