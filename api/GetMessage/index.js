module.exports = async function (context, req) {
  const date = "2024-03-19T06:11:58.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

