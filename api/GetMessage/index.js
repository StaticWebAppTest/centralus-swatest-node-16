module.exports = async function (context, req) {
  const date = "2024-05-17T11:09:10.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

