module.exports = async function (context, req) {
  const date = "2023-08-24T08:11:14.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

