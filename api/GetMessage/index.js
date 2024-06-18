module.exports = async function (context, req) {
  const date = "2024-06-18T08:14:07.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

