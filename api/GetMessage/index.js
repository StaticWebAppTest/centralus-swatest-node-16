module.exports = async function (context, req) {
  const date = "2022-08-14T11:09:26.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

