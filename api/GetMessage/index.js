module.exports = async function (context, req) {
  const date = "2023-12-21T16:11:30.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

