module.exports = async function (context, req) {
  const date = "2023-05-15T11:07:33.630Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

