module.exports = async function (context, req) {
  const date = "2022-05-28T18:12:44.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

