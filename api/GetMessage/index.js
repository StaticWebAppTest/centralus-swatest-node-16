module.exports = async function (context, req) {
  const date = "2022-03-03T15:18:07.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

