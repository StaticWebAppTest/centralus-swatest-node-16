module.exports = async function (context, req) {
  const date = "2024-02-10T17:08:52.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

