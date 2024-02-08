module.exports = async function (context, req) {
  const date = "2024-02-08T18:11:19.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

