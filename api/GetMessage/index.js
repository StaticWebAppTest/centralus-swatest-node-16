module.exports = async function (context, req) {
  const date = "2023-04-01T16:10:34.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

