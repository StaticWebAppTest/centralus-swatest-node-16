module.exports = async function (context, req) {
  const date = "2022-07-11T21:09:36.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

