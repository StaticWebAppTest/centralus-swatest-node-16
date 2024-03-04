module.exports = async function (context, req) {
  const date = "2024-03-04T03:43:12.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

