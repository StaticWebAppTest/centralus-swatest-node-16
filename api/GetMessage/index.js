module.exports = async function (context, req) {
  const date = "2023-03-10T03:21:16.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

