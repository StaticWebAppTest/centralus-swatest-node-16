module.exports = async function (context, req) {
  const date = "2023-07-17T15:10:29.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

