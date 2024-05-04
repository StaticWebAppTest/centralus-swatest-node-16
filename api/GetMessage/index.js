module.exports = async function (context, req) {
  const date = "2024-05-04T11:07:27.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

