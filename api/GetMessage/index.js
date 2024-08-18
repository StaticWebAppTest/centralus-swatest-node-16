module.exports = async function (context, req) {
  const date = "2024-08-18T05:10:40.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

