module.exports = async function (context, req) {
  const date = "2022-09-14T16:16:40.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

