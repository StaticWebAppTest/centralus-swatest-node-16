module.exports = async function (context, req) {
  const date = "2022-04-11T09:10:57.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

