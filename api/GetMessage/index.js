module.exports = async function (context, req) {
  const date = "2022-09-02T13:34:28.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

