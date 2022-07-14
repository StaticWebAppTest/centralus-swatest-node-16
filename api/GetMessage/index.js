module.exports = async function (context, req) {
  const date = "2022-07-14T15:12:14.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

