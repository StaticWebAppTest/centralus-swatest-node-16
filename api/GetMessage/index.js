module.exports = async function (context, req) {
  const date = "2024-09-05T07:10:39.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

