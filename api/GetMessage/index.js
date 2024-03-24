module.exports = async function (context, req) {
  const date = "2024-03-24T05:09:08.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

