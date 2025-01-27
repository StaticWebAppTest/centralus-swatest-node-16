module.exports = async function (context, req) {
  const date = "2025-01-27T07:11:40.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

