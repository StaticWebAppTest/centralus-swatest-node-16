module.exports = async function (context, req) {
  const date = "2024-05-11T05:09:39.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

