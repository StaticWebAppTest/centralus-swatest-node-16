module.exports = async function (context, req) {
  const date = "2022-07-15T14:16:06.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

