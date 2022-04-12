module.exports = async function (context, req) {
  const date = "2022-04-12T18:12:48.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

