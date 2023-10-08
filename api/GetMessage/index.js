module.exports = async function (context, req) {
  const date = "2023-10-08T07:07:14.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

