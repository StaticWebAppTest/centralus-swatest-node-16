module.exports = async function (context, req) {
  const date = "2023-11-27T09:10:18.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

