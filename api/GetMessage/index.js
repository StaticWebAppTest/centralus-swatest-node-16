module.exports = async function (context, req) {
  const date = "2024-10-10T16:14:02.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

