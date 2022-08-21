module.exports = async function (context, req) {
  const date = "2022-08-21T18:12:53.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

