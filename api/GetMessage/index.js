module.exports = async function (context, req) {
  const date = "2024-03-10T05:08:32.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

