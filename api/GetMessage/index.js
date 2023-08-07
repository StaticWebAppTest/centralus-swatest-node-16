module.exports = async function (context, req) {
  const date = "2023-08-07T05:08:46.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

