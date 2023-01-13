module.exports = async function (context, req) {
  const date = "2023-01-13T09:11:09.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

