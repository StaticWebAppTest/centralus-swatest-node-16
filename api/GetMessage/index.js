module.exports = async function (context, req) {
  const date = "2022-05-24T17:18:37.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

