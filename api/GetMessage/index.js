module.exports = async function (context, req) {
  const date = "2022-11-25T00:54:39.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

