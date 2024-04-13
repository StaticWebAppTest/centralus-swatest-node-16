module.exports = async function (context, req) {
  const date = "2024-04-13T21:07:10.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

