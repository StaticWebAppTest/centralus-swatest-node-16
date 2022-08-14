module.exports = async function (context, req) {
  const date = "2022-08-14T04:21:46.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

