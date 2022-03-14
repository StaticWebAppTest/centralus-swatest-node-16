module.exports = async function (context, req) {
  const date = "2022-03-14T18:12:17.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

