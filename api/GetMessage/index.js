module.exports = async function (context, req) {
  const date = "2022-09-17T10:12:30.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

