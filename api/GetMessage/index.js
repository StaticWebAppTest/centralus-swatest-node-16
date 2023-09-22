module.exports = async function (context, req) {
  const date = "2023-09-22T06:11:46.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

