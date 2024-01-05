module.exports = async function (context, req) {
  const date = "2024-01-05T05:09:08.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

