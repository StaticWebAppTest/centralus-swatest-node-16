module.exports = async function (context, req) {
  const date = "2024-05-18T07:09:18.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

