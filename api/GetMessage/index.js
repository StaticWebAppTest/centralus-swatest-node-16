module.exports = async function (context, req) {
  const date = "2024-04-17T18:11:52.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

