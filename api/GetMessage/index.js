module.exports = async function (context, req) {
  const date = "2024-02-22T07:09:16.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

