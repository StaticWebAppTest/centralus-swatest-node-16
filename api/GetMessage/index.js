module.exports = async function (context, req) {
  const date = "2024-11-20T09:13:14.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

