module.exports = async function (context, req) {
  const date = "2022-08-14T18:12:22.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

