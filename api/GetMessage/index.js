module.exports = async function (context, req) {
  const date = "2023-06-30T10:10:10.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

