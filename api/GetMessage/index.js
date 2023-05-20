module.exports = async function (context, req) {
  const date = "2023-05-20T18:09:56.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

