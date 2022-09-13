module.exports = async function (context, req) {
  const date = "2022-09-13T08:16:26.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

