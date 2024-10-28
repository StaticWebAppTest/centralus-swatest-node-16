module.exports = async function (context, req) {
  const date = "2024-10-28T09:13:35.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

