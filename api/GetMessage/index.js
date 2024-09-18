module.exports = async function (context, req) {
  const date = "2024-09-18T05:11:25.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

