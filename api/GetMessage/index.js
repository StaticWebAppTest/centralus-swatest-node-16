module.exports = async function (context, req) {
  const date = "2022-03-09T18:12:04.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

