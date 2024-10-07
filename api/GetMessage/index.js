module.exports = async function (context, req) {
  const date = "2024-10-07T14:11:22.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

