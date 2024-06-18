module.exports = async function (context, req) {
  const date = "2024-06-18T09:11:14.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

