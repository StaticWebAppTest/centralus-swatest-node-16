module.exports = async function (context, req) {
  const date = "2023-04-21T18:11:00.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

