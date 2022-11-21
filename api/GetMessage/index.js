module.exports = async function (context, req) {
  const date = "2022-11-21T15:11:47.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

