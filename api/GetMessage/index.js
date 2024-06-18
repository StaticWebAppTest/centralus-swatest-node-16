module.exports = async function (context, req) {
  const date = "2024-06-18T15:10:27.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

