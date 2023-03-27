module.exports = async function (context, req) {
  const date = "2023-03-27T14:20:39.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

