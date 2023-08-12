module.exports = async function (context, req) {
  const date = "2023-08-12T00:37:37.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

