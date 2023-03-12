module.exports = async function (context, req) {
  const date = "2023-03-12T00:54:57.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

