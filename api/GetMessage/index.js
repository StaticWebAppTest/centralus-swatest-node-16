module.exports = async function (context, req) {
  const date = "2022-11-19T18:12:35.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

