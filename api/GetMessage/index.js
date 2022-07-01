module.exports = async function (context, req) {
  const date = "2022-07-01T11:08:58.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

