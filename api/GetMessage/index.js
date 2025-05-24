module.exports = async function (context, req) {
  const date = "2025-05-24T14:10:45.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

