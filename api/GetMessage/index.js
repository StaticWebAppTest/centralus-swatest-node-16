module.exports = async function (context, req) {
  const date = "2023-04-08T21:07:06.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

