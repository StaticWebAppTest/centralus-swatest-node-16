module.exports = async function (context, req) {
  const date = "2022-08-14T16:13:23.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

