module.exports = async function (context, req) {
  const date = "2023-01-04T04:11:33.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

