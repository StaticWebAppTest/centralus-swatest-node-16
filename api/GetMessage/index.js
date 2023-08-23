module.exports = async function (context, req) {
  const date = "2023-08-23T14:07:59.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

