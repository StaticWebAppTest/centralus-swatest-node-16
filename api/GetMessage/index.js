module.exports = async function (context, req) {
  const date = "2023-07-29T20:07:52.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

