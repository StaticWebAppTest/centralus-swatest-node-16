module.exports = async function (context, req) {
  const date = "2024-01-07T08:11:07.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

