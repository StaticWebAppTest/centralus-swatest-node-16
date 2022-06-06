module.exports = async function (context, req) {
  const date = "2022-06-06T03:46:20.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

