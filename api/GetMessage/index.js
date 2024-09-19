module.exports = async function (context, req) {
  const date = "2024-09-19T18:14:44.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

