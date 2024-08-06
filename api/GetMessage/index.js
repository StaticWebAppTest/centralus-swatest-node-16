module.exports = async function (context, req) {
  const date = "2024-08-06T14:10:01.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

