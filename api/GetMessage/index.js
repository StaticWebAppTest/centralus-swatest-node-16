module.exports = async function (context, req) {
  const date = "2023-06-18T09:08:22.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

