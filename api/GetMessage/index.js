module.exports = async function (context, req) {
  const date = "2023-01-12T09:11:30.049Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

