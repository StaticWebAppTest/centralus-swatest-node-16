module.exports = async function (context, req) {
  const date = "2022-09-12T16:19:12.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

