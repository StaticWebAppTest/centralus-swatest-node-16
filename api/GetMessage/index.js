module.exports = async function (context, req) {
  const date = "2024-08-18T06:14:07.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

