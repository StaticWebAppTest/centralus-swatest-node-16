module.exports = async function (context, req) {
  const date = "2023-06-14T04:10:56.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

