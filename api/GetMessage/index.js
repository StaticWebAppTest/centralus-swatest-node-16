module.exports = async function (context, req) {
  const date = "2023-08-26T02:11:50.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

