module.exports = async function (context, req) {
  const date = "2022-12-27T18:11:23.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

