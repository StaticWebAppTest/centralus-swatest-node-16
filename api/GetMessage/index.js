module.exports = async function (context, req) {
  const date = "2023-12-19T09:09:16.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

