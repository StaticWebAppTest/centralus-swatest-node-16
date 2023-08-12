module.exports = async function (context, req) {
  const date = "2023-08-12T03:08:12.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

