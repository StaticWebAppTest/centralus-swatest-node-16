module.exports = async function (context, req) {
  const date = "2024-07-14T11:09:29.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

