module.exports = async function (context, req) {
  const date = "2023-06-22T04:10:29.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

