module.exports = async function (context, req) {
  const date = "2023-12-14T20:10:01.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

