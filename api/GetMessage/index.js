module.exports = async function (context, req) {
  const date = "2024-12-28T06:15:06.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

