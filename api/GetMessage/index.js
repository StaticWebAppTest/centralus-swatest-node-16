module.exports = async function (context, req) {
  const date = "2023-11-17T09:09:15.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

