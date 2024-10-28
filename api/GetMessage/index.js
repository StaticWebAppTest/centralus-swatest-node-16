module.exports = async function (context, req) {
  const date = "2024-10-28T12:23:31.452Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

