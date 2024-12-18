module.exports = async function (context, req) {
  const date = "2024-12-18T21:10:25.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

