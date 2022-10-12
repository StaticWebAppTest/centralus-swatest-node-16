module.exports = async function (context, req) {
  const date = "2022-10-12T15:18:49.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

