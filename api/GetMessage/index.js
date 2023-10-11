module.exports = async function (context, req) {
  const date = "2023-10-11T15:08:13.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

