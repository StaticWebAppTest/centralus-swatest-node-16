module.exports = async function (context, req) {
  const date = "2024-06-15T11:08:55.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

