module.exports = async function (context, req) {
  const date = "2022-11-05T18:12:51.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

