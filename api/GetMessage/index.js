module.exports = async function (context, req) {
  const date = "2024-03-13T09:10:01.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

