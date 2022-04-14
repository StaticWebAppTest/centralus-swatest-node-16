module.exports = async function (context, req) {
  const date = "2022-04-14T14:09:55.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

