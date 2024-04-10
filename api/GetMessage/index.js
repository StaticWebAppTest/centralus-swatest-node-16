module.exports = async function (context, req) {
  const date = "2024-04-10T16:13:50.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

