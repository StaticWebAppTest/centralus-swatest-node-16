module.exports = async function (context, req) {
  const date = "2023-02-04T09:08:43.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

