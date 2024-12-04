module.exports = async function (context, req) {
  const date = "2024-12-04T14:12:27.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

