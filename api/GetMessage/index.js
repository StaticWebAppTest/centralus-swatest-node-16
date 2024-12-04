module.exports = async function (context, req) {
  const date = "2024-12-04T06:18:28.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

