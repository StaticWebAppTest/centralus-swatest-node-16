module.exports = async function (context, req) {
  const date = "2022-09-15T15:12:44.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

