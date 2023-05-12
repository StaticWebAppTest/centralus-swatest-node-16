module.exports = async function (context, req) {
  const date = "2023-05-12T14:08:02.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

