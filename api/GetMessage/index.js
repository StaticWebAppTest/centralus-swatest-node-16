module.exports = async function (context, req) {
  const date = "2024-04-28T11:07:10.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

