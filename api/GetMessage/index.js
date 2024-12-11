module.exports = async function (context, req) {
  const date = "2024-12-11T06:18:25.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

