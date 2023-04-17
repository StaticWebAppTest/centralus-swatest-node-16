module.exports = async function (context, req) {
  const date = "2023-04-17T15:09:17.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

