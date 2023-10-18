module.exports = async function (context, req) {
  const date = "2023-10-18T14:08:32.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

