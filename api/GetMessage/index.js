module.exports = async function (context, req) {
  const date = "2023-11-13T05:09:00.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

