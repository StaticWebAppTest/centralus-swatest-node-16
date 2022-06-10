module.exports = async function (context, req) {
  const date = "2022-06-10T00:58:04.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

