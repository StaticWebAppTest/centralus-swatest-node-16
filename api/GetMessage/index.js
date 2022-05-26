module.exports = async function (context, req) {
  const date = "2022-05-26T15:12:54.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

