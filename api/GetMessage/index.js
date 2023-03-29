module.exports = async function (context, req) {
  const date = "2023-03-29T04:11:52.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

