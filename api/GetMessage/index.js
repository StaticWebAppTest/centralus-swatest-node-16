module.exports = async function (context, req) {
  const date = "2023-04-22T14:07:03.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

