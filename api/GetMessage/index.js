module.exports = async function (context, req) {
  const date = "2023-08-24T05:08:15.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

