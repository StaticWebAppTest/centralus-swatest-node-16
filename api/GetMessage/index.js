module.exports = async function (context, req) {
  const date = "2023-08-15T01:39:50.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

