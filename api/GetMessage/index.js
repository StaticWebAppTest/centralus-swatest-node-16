module.exports = async function (context, req) {
  const date = "2023-01-18T14:08:58.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

