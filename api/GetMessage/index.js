module.exports = async function (context, req) {
  const date = "2022-05-14T10:12:10.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

