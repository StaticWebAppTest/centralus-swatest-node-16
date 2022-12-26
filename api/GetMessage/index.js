module.exports = async function (context, req) {
  const date = "2022-12-26T16:12:08.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

