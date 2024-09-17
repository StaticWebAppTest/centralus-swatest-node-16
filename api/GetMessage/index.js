module.exports = async function (context, req) {
  const date = "2024-09-17T18:15:19.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

