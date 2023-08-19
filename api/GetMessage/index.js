module.exports = async function (context, req) {
  const date = "2023-08-19T05:07:20.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

