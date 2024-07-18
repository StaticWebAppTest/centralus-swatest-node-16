module.exports = async function (context, req) {
  const date = "2024-07-18T09:11:03.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

