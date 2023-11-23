module.exports = async function (context, req) {
  const date = "2023-11-23T10:09:44.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

