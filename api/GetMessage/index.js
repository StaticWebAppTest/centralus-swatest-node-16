module.exports = async function (context, req) {
  const date = "2024-05-23T03:11:06.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

