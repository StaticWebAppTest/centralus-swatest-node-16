module.exports = async function (context, req) {
  const date = "2023-05-17T11:07:18.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

