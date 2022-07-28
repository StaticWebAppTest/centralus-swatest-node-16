module.exports = async function (context, req) {
  const date = "2022-07-28T04:36:46.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

