module.exports = async function (context, req) {
  const date = "2022-12-23T20:09:46.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

