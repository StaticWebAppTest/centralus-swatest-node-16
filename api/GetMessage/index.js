module.exports = async function (context, req) {
  const date = "2022-11-20T15:10:10.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

