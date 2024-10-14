module.exports = async function (context, req) {
  const date = "2024-10-14T15:12:23.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

