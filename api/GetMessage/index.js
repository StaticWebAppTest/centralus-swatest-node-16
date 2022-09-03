module.exports = async function (context, req) {
  const date = "2022-09-03T15:11:31.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

