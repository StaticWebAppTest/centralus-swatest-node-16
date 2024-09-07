module.exports = async function (context, req) {
  const date = "2024-09-07T13:13:36.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

