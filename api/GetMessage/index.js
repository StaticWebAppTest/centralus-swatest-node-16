module.exports = async function (context, req) {
  const date = "2022-08-07T17:11:11.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

