module.exports = async function (context, req) {
  const date = "2023-03-10T07:09:28.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

