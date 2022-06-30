module.exports = async function (context, req) {
  const date = "2022-06-30T19:08:06.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

