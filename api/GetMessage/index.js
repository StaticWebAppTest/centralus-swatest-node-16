module.exports = async function (context, req) {
  const date = "2022-08-27T03:30:07.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

