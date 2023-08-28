module.exports = async function (context, req) {
  const date = "2023-08-28T21:07:27.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

