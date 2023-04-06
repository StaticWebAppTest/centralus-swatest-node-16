module.exports = async function (context, req) {
  const date = "2023-04-06T05:08:35.645Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

