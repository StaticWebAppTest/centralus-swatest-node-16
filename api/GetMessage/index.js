module.exports = async function (context, req) {
  const date = "2023-10-30T04:11:11.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

