module.exports = async function (context, req) {
  const date = "2024-10-24T14:11:31.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

