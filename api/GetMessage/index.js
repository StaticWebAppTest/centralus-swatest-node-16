module.exports = async function (context, req) {
  const date = "2023-03-22T11:07:49.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

