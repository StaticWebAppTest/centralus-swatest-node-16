module.exports = async function (context, req) {
  const date = "2022-02-25T18:12:08.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

