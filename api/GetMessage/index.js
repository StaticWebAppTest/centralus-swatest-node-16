module.exports = async function (context, req) {
  const date = "2023-08-28T19:06:50.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

