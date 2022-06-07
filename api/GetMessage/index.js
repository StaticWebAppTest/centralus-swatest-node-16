module.exports = async function (context, req) {
  const date = "2022-06-07T16:14:18.673Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

