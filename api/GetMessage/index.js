module.exports = async function (context, req) {
  const date = "2022-06-14T04:43:09.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

