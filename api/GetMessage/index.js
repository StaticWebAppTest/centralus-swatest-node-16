module.exports = async function (context, req) {
  const date = "2024-03-13T19:08:07.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

