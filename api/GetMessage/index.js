module.exports = async function (context, req) {
  const date = "2023-06-22T08:10:59.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

