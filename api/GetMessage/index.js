module.exports = async function (context, req) {
  const date = "2023-10-28T04:10:41.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

