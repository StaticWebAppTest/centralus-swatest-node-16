module.exports = async function (context, req) {
  const date = "2024-02-21T03:09:31.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

