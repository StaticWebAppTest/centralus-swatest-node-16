module.exports = async function (context, req) {
  const date = "2024-06-30T11:07:47.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

