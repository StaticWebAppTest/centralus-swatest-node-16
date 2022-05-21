module.exports = async function (context, req) {
  const date = "2022-05-21T13:21:59.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

