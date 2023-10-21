module.exports = async function (context, req) {
  const date = "2023-10-21T14:07:06.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

