module.exports = async function (context, req) {
  const date = "2022-03-31T11:08:58.735Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

