module.exports = async function (context, req) {
  const date = "2023-06-26T05:10:14.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

