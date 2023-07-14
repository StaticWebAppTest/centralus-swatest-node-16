module.exports = async function (context, req) {
  const date = "2023-07-14T04:11:57.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

