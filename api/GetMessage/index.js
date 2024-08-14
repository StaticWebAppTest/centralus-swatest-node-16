module.exports = async function (context, req) {
  const date = "2024-08-14T09:11:30.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

