module.exports = async function (context, req) {
  const date = "2024-04-11T11:08:19.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

