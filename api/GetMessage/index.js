module.exports = async function (context, req) {
  const date = "2022-03-17T16:13:39.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

