module.exports = async function (context, req) {
  const date = "2024-02-28T09:08:42.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

