module.exports = async function (context, req) {
  const date = "2024-04-06T04:12:18.535Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

