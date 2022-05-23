module.exports = async function (context, req) {
  const date = "2022-05-23T16:15:17.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

