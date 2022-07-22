module.exports = async function (context, req) {
  const date = "2022-07-22T14:10:27.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

