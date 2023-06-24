module.exports = async function (context, req) {
  const date = "2023-06-24T04:12:04.700Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

