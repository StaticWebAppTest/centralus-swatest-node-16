module.exports = async function (context, req) {
  const date = "2023-11-17T05:09:00.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

