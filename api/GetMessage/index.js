module.exports = async function (context, req) {
  const date = "2023-07-17T05:09:51.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

