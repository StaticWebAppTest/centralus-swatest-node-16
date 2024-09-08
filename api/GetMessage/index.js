module.exports = async function (context, req) {
  const date = "2024-09-08T09:10:43.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

