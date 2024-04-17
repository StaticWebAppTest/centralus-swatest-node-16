module.exports = async function (context, req) {
  const date = "2024-04-17T09:09:09.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

