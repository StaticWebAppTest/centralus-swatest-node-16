module.exports = async function (context, req) {
  const date = "2022-04-15T18:12:39.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

