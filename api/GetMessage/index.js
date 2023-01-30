module.exports = async function (context, req) {
  const date = "2023-01-30T23:09:53.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

