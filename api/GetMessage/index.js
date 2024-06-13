module.exports = async function (context, req) {
  const date = "2024-06-13T08:13:12.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

