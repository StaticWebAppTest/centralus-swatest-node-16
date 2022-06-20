module.exports = async function (context, req) {
  const date = "2022-06-20T15:10:50.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

