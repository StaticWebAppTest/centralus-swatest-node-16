module.exports = async function (context, req) {
  const date = "2023-03-06T05:09:59.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

