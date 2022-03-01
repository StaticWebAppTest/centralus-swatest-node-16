module.exports = async function (context, req) {
  const date = "2022-03-01T00:45:05.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

