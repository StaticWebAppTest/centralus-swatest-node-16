module.exports = async function (context, req) {
  const date = "2023-08-30T16:11:10.770Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

