module.exports = async function (context, req) {
  const date = "2023-10-26T11:07:18.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

