module.exports = async function (context, req) {
  const date = "2022-10-03T18:21:05.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

