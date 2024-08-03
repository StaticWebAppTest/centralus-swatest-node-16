module.exports = async function (context, req) {
  const date = "2024-08-03T08:13:08.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

