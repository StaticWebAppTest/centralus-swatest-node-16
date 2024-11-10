module.exports = async function (context, req) {
  const date = "2024-11-10T08:13:11.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

