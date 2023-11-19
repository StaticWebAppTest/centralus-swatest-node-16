module.exports = async function (context, req) {
  const date = "2023-11-19T08:11:03.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

