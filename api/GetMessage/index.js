module.exports = async function (context, req) {
  const date = "2023-08-21T14:07:58.600Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

