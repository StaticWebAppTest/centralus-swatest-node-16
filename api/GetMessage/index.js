module.exports = async function (context, req) {
  const date = "2024-12-28T17:09:10.261Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

