module.exports = async function (context, req) {
  const date = "2022-09-15T07:25:04.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

