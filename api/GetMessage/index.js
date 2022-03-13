module.exports = async function (context, req) {
  const date = "2022-03-13T07:09:34.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

