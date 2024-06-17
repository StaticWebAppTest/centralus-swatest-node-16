module.exports = async function (context, req) {
  const date = "2024-06-17T09:11:12.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

