module.exports = async function (context, req) {
  const date = "2024-08-08T18:14:50.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

