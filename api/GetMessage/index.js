module.exports = async function (context, req) {
  const date = "2023-08-24T14:07:56.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

