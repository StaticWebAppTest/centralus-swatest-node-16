module.exports = async function (context, req) {
  const date = "2022-04-06T09:10:46.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

