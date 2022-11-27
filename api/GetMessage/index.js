module.exports = async function (context, req) {
  const date = "2022-11-27T15:09:25.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

