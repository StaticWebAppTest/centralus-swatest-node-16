module.exports = async function (context, req) {
  const date = "2024-03-20T07:10:17.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

