module.exports = async function (context, req) {
  const date = "2022-03-26T14:08:35.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

