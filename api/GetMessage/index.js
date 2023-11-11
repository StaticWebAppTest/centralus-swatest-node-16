module.exports = async function (context, req) {
  const date = "2023-11-11T21:07:15.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

