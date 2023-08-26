module.exports = async function (context, req) {
  const date = "2023-08-26T05:07:29.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

