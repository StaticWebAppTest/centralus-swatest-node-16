module.exports = async function (context, req) {
  const date = "2022-11-15T17:12:16.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

