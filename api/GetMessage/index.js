module.exports = async function (context, req) {
  const date = "2023-02-04T04:10:59.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

