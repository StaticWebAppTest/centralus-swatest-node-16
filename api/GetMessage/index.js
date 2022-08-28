module.exports = async function (context, req) {
  const date = "2022-08-28T10:12:06.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

