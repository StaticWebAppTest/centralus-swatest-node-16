module.exports = async function (context, req) {
  const date = "2022-12-05T18:11:57.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

