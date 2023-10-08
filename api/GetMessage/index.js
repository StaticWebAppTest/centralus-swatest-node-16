module.exports = async function (context, req) {
  const date = "2023-10-08T21:07:07.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

