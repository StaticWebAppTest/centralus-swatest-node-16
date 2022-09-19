module.exports = async function (context, req) {
  const date = "2022-09-19T09:17:03.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

