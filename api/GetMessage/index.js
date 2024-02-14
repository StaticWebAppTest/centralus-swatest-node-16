module.exports = async function (context, req) {
  const date = "2024-02-14T19:07:21.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

