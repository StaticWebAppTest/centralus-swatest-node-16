module.exports = async function (context, req) {
  const date = "2023-08-06T07:07:32.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

