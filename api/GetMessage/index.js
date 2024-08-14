module.exports = async function (context, req) {
  const date = "2024-08-14T05:11:09.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

