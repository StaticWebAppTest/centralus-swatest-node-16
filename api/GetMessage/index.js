module.exports = async function (context, req) {
  const date = "2024-10-15T15:12:19.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

