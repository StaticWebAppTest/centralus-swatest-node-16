module.exports = async function (context, req) {
  const date = "2022-04-15T05:16:31.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

