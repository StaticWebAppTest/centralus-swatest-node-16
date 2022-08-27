module.exports = async function (context, req) {
  const date = "2022-08-27T10:11:19.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

