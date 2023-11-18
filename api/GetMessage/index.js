module.exports = async function (context, req) {
  const date = "2023-11-18T07:07:55.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

