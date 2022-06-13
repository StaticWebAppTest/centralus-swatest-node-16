module.exports = async function (context, req) {
  const date = "2022-06-13T23:10:46.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

