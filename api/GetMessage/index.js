module.exports = async function (context, req) {
  const date = "2022-09-14T15:12:42.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

