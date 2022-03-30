module.exports = async function (context, req) {
  const date = "2022-03-30T18:12:48.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

