module.exports = async function (context, req) {
  const date = "2024-12-04T23:12:10.830Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

