module.exports = async function (context, req) {
  const date = "2022-11-27T17:08:43.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

