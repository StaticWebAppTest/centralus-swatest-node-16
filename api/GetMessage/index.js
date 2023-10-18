module.exports = async function (context, req) {
  const date = "2023-10-18T08:12:07.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

