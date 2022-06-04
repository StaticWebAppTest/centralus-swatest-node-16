module.exports = async function (context, req) {
  const date = "2022-06-04T22:09:31.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

