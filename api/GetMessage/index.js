module.exports = async function (context, req) {
  const date = "2024-01-12T14:09:07.932Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

