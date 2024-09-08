module.exports = async function (context, req) {
  const date = "2024-09-08T05:11:36.708Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

