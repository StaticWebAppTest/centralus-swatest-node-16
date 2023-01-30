module.exports = async function (context, req) {
  const date = "2023-01-30T08:13:16.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

