module.exports = async function (context, req) {
  const date = "2022-10-22T18:15:48.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

