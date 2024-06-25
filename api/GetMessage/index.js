module.exports = async function (context, req) {
  const date = "2024-06-25T18:14:07.940Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

