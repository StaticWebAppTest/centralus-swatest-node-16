module.exports = async function (context, req) {
  const date = "2024-09-19T10:12:14.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

