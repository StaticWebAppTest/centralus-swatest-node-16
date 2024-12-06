module.exports = async function (context, req) {
  const date = "2024-12-06T06:18:11.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

