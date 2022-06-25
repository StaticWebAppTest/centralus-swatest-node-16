module.exports = async function (context, req) {
  const date = "2022-06-25T14:08:55.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

