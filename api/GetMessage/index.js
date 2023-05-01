module.exports = async function (context, req) {
  const date = "2023-05-01T06:12:10.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

