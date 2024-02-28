module.exports = async function (context, req) {
  const date = "2024-02-28T13:09:17.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

