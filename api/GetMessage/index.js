module.exports = async function (context, req) {
  const date = "2023-01-20T17:09:11.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

