module.exports = async function (context, req) {
  const date = "2024-10-19T14:10:31.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

