module.exports = async function (context, req) {
  const date = "2023-07-08T17:07:55.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

