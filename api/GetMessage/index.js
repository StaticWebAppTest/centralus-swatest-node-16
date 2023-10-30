module.exports = async function (context, req) {
  const date = "2023-10-30T16:11:22.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

