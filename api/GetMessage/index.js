module.exports = async function (context, req) {
  const date = "2024-12-04T11:11:05.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

