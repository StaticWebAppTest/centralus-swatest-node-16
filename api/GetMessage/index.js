module.exports = async function (context, req) {
  const date = "2024-10-27T04:14:12.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

