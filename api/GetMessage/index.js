module.exports = async function (context, req) {
  const date = "2024-05-27T14:09:09.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

