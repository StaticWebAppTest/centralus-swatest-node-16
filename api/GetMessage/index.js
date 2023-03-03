module.exports = async function (context, req) {
  const date = "2023-03-03T09:10:29.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

