module.exports = async function (context, req) {
  const date = "2022-11-08T07:10:48.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

