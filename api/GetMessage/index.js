module.exports = async function (context, req) {
  const date = "2022-08-22T15:13:27.652Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

