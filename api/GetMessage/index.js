module.exports = async function (context, req) {
  const date = "2024-07-08T08:13:38.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

