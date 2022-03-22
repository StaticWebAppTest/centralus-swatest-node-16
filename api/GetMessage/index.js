module.exports = async function (context, req) {
  const date = "2022-03-22T18:12:05.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

