module.exports = async function (context, req) {
  const date = "2023-08-05T05:07:50.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

