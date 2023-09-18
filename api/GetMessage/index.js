module.exports = async function (context, req) {
  const date = "2023-09-18T03:09:06.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

