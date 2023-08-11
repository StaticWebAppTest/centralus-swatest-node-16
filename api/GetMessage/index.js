module.exports = async function (context, req) {
  const date = "2023-08-11T18:10:17.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

