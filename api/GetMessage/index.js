module.exports = async function (context, req) {
  const date = "2024-06-10T17:08:42.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

