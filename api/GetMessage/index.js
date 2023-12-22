module.exports = async function (context, req) {
  const date = "2023-12-22T14:08:39.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

