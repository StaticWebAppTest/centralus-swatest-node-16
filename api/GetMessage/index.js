module.exports = async function (context, req) {
  const date = "2024-10-11T05:11:35.562Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

