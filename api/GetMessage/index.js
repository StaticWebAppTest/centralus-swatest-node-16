module.exports = async function (context, req) {
  const date = "2022-07-04T04:39:54.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

