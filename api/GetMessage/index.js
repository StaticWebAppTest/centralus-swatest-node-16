module.exports = async function (context, req) {
  const date = "2024-02-28T23:10:42.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

