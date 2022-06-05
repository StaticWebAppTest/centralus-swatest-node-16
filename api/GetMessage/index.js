module.exports = async function (context, req) {
  const date = "2022-06-05T15:09:51.511Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

