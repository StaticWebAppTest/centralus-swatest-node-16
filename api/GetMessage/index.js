module.exports = async function (context, req) {
  const date = "2024-09-04T22:09:59.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

