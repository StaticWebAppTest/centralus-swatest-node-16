module.exports = async function (context, req) {
  const date = "2023-03-15T15:10:10.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

