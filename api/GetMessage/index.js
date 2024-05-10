module.exports = async function (context, req) {
  const date = "2024-05-10T18:12:32.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

