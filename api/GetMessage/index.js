module.exports = async function (context, req) {
  const date = "2025-04-07T13:23:30.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

