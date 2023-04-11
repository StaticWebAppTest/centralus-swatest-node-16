module.exports = async function (context, req) {
  const date = "2023-04-11T18:10:05.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

