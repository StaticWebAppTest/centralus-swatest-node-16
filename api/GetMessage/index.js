module.exports = async function (context, req) {
  const date = "2022-06-29T13:31:37.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

