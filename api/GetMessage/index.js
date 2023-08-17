module.exports = async function (context, req) {
  const date = "2023-08-17T14:07:47.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

