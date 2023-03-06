module.exports = async function (context, req) {
  const date = "2023-03-06T23:10:15.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

