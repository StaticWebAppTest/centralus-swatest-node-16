module.exports = async function (context, req) {
  const date = "2024-11-05T05:12:03.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

