module.exports = async function (context, req) {
  const date = "2023-08-31T04:10:16.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

