module.exports = async function (context, req) {
  const date = "2024-06-28T06:14:17.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

