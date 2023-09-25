module.exports = async function (context, req) {
  const date = "2023-09-25T08:12:06.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

