module.exports = async function (context, req) {
  const date = "2022-11-19T10:10:40.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

