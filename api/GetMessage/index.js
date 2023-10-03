module.exports = async function (context, req) {
  const date = "2023-10-03T21:07:46.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

