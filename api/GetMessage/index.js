module.exports = async function (context, req) {
  const date = "2023-01-21T16:11:56.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

