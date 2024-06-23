module.exports = async function (context, req) {
  const date = "2024-06-23T23:10:19.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

