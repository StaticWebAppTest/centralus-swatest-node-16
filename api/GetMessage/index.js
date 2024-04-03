module.exports = async function (context, req) {
  const date = "2024-04-03T18:11:31.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

