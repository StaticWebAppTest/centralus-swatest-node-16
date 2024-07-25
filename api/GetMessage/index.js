module.exports = async function (context, req) {
  const date = "2024-07-25T20:11:29.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

