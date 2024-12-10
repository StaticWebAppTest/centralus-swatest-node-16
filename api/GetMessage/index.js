module.exports = async function (context, req) {
  const date = "2024-12-10T16:16:09.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

