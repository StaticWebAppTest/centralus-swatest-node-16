module.exports = async function (context, req) {
  const date = "2023-04-26T08:11:49.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

