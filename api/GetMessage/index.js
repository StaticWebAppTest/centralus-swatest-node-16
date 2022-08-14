module.exports = async function (context, req) {
  const date = "2022-08-14T07:10:05.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

