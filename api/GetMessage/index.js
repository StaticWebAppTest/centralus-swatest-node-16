module.exports = async function (context, req) {
  const date = "2022-05-27T18:13:54.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

