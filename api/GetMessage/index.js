module.exports = async function (context, req) {
  const date = "2023-09-17T05:07:44.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

