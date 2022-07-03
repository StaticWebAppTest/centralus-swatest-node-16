module.exports = async function (context, req) {
  const date = "2022-07-03T10:11:30.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

