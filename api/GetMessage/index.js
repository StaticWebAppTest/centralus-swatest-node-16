module.exports = async function (context, req) {
  const date = "2023-05-12T22:08:15.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

