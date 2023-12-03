module.exports = async function (context, req) {
  const date = "2023-12-03T17:07:41.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

