module.exports = async function (context, req) {
  const date = "2024-07-14T13:32:52.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

