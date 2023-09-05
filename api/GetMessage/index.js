module.exports = async function (context, req) {
  const date = "2023-09-05T06:11:28.191Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

