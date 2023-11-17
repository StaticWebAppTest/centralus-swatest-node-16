module.exports = async function (context, req) {
  const date = "2023-11-17T23:09:09.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

