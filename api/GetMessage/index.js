module.exports = async function (context, req) {
  const date = "2024-05-29T14:09:57.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

