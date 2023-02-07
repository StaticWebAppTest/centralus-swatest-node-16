module.exports = async function (context, req) {
  const date = "2023-02-07T14:08:48.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

