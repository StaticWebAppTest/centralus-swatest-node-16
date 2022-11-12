module.exports = async function (context, req) {
  const date = "2022-11-12T16:14:40.493Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

