module.exports = async function (context, req) {
  const date = "2024-06-23T14:09:04.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

