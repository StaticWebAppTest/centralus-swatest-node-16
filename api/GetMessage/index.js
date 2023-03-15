module.exports = async function (context, req) {
  const date = "2023-03-15T08:13:08.109Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

