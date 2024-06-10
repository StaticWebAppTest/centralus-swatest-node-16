module.exports = async function (context, req) {
  const date = "2024-06-10T12:18:54.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

