module.exports = async function (context, req) {
  const date = "2024-05-07T14:09:18.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

