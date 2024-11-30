module.exports = async function (context, req) {
  const date = "2024-11-30T09:11:37.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

