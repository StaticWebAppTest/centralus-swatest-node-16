module.exports = async function (context, req) {
  const date = "2023-04-04T14:09:22.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

