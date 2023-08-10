module.exports = async function (context, req) {
  const date = "2023-08-10T16:11:18.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

