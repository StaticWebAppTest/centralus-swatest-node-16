module.exports = async function (context, req) {
  const date = "2024-02-14T08:11:49.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

