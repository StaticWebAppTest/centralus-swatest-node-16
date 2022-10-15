module.exports = async function (context, req) {
  const date = "2022-10-15T22:12:22.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

