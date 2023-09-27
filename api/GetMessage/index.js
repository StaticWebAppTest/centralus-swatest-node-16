module.exports = async function (context, req) {
  const date = "2023-09-27T07:08:25.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

