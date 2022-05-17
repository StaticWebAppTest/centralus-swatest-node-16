module.exports = async function (context, req) {
  const date = "2022-05-17T14:18:24.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

