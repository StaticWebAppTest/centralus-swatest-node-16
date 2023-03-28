module.exports = async function (context, req) {
  const date = "2023-03-28T11:08:18.315Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

