module.exports = async function (context, req) {
  const date = "2023-01-12T08:12:59.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

