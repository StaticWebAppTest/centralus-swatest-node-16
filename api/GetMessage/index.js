module.exports = async function (context, req) {
  const date = "2023-08-06T15:08:12.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

