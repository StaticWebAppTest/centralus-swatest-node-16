module.exports = async function (context, req) {
  const date = "2022-05-17T02:57:08.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

