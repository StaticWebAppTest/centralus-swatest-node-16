module.exports = async function (context, req) {
  const date = "2024-12-23T15:11:52.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

