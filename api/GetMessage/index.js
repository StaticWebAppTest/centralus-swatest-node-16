module.exports = async function (context, req) {
  const date = "2023-11-23T04:11:33.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

