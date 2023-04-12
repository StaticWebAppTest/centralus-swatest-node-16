module.exports = async function (context, req) {
  const date = "2023-04-12T08:11:46.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

