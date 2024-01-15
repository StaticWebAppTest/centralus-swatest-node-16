module.exports = async function (context, req) {
  const date = "2024-01-15T13:12:40.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

