module.exports = async function (context, req) {
  const date = "2023-01-15T06:11:30.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

