module.exports = async function (context, req) {
  const date = "2024-09-04T03:11:50.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

