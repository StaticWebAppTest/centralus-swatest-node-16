module.exports = async function (context, req) {
  const date = "2023-05-07T04:10:27.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

