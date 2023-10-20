module.exports = async function (context, req) {
  const date = "2023-10-20T05:08:11.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

