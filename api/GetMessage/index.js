module.exports = async function (context, req) {
  const date = "2022-04-14T18:12:38.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

