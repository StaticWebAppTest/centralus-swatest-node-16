module.exports = async function (context, req) {
  const date = "2024-07-03T11:08:56.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

