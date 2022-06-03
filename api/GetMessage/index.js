module.exports = async function (context, req) {
  const date = "2022-06-03T18:12:56.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

