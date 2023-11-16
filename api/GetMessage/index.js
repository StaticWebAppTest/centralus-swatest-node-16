module.exports = async function (context, req) {
  const date = "2023-11-16T04:11:34.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

