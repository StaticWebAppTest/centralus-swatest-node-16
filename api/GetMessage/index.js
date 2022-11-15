module.exports = async function (context, req) {
  const date = "2022-11-15T15:11:20.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

