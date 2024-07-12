module.exports = async function (context, req) {
  const date = "2024-07-12T12:19:50.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

