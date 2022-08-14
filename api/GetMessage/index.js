module.exports = async function (context, req) {
  const date = "2022-08-14T14:10:33.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

