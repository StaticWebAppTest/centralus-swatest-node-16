module.exports = async function (context, req) {
  const date = "2023-11-20T14:09:03.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

