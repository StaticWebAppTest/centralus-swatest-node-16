module.exports = async function (context, req) {
  const date = "2022-05-22T21:09:50.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

