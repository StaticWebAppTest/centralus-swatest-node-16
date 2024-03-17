module.exports = async function (context, req) {
  const date = "2024-03-17T06:10:51.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

