module.exports = async function (context, req) {
  const date = "2022-12-04T17:08:50.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

