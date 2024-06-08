module.exports = async function (context, req) {
  const date = "2024-06-08T11:08:25.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

