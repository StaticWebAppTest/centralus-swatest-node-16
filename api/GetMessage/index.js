module.exports = async function (context, req) {
  const date = "2022-03-27T18:11:29.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

