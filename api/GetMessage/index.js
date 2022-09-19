module.exports = async function (context, req) {
  const date = "2022-09-19T23:13:11.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

