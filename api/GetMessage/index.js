module.exports = async function (context, req) {
  const date = "2022-04-14T06:13:58.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

