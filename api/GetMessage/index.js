module.exports = async function (context, req) {
  const date = "2024-06-11T19:08:51.539Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

