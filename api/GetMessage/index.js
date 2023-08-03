module.exports = async function (context, req) {
  const date = "2023-08-03T04:10:29.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

