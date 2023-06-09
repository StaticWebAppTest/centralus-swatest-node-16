module.exports = async function (context, req) {
  const date = "2023-06-09T04:10:49.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

