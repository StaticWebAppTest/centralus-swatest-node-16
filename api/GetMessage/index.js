module.exports = async function (context, req) {
  const date = "2022-12-31T18:10:32.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

