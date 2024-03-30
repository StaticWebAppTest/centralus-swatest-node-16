module.exports = async function (context, req) {
  const date = "2024-03-30T21:07:27.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

