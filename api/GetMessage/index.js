module.exports = async function (context, req) {
  const date = "2023-03-18T15:08:48.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

