module.exports = async function (context, req) {
  const date = "2023-07-12T10:10:41.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

