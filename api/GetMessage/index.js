module.exports = async function (context, req) {
  const date = "2022-09-25T14:10:10.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

