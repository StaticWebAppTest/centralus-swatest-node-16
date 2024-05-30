module.exports = async function (context, req) {
  const date = "2024-05-30T11:08:23.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

