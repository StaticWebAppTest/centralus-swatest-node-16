module.exports = async function (context, req) {
  const date = "2023-08-06T16:10:40.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

