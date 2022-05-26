module.exports = async function (context, req) {
  const date = "2022-05-26T17:19:02.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

