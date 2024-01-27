module.exports = async function (context, req) {
  const date = "2024-01-27T14:08:02.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

