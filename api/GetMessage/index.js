module.exports = async function (context, req) {
  const date = "2023-09-09T21:06:40.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

