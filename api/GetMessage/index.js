module.exports = async function (context, req) {
  const date = "2024-10-27T09:11:42.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

