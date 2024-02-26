module.exports = async function (context, req) {
  const date = "2024-02-26T07:09:49.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

