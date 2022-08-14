module.exports = async function (context, req) {
  const date = "2022-08-14T01:00:30.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

