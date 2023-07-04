module.exports = async function (context, req) {
  const date = "2023-07-04T04:12:26.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

