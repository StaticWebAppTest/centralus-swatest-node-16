module.exports = async function (context, req) {
  const date = "2024-04-23T08:12:20.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

