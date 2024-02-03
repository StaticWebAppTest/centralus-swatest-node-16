module.exports = async function (context, req) {
  const date = "2024-02-03T11:07:28.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

