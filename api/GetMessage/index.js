module.exports = async function (context, req) {
  const date = "2024-07-22T04:13:09.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

