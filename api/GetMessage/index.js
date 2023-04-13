module.exports = async function (context, req) {
  const date = "2023-04-13T21:07:57.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

