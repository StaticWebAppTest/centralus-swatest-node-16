module.exports = async function (context, req) {
  const date = "2024-12-28T12:20:23.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

