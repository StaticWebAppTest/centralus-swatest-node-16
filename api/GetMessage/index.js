module.exports = async function (context, req) {
  const date = "2022-11-25T13:20:36.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

