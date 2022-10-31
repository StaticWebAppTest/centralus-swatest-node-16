module.exports = async function (context, req) {
  const date = "2022-10-31T22:13:20.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

