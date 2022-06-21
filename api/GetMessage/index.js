module.exports = async function (context, req) {
  const date = "2022-06-21T18:12:34.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

