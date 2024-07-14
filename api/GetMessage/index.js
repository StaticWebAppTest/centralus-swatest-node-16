module.exports = async function (context, req) {
  const date = "2024-07-14T09:11:36.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

