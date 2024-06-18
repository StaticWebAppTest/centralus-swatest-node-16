module.exports = async function (context, req) {
  const date = "2024-06-18T23:09:39.939Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

