module.exports = async function (context, req) {
  const date = "2023-07-18T12:18:49.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

