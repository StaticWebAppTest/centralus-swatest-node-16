module.exports = async function (context, req) {
  const date = "2023-08-04T18:10:41.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

