module.exports = async function (context, req) {
  const date = "2024-05-11T03:11:03.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

