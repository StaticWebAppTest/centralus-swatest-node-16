module.exports = async function (context, req) {
  const date = "2023-01-26T05:09:09.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

