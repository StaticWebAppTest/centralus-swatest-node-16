module.exports = async function (context, req) {
  const date = "2022-07-12T22:10:14.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

