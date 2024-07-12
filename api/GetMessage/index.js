module.exports = async function (context, req) {
  const date = "2024-07-12T14:09:31.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

