module.exports = async function (context, req) {
  const date = "2022-12-28T12:16:54.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

