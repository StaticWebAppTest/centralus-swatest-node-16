module.exports = async function (context, req) {
  const date = "2022-09-22T19:11:08.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

