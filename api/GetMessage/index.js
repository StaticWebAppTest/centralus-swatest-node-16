module.exports = async function (context, req) {
  const date = "2023-02-06T18:12:01.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

