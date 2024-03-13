module.exports = async function (context, req) {
  const date = "2024-03-13T14:08:52.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

