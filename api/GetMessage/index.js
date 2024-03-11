module.exports = async function (context, req) {
  const date = "2024-03-11T11:09:21.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

