module.exports = async function (context, req) {
  const date = "2023-05-03T17:08:10.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

