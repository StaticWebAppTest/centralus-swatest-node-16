module.exports = async function (context, req) {
  const date = "2022-04-03T07:09:52.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

