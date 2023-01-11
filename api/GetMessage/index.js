module.exports = async function (context, req) {
  const date = "2023-01-11T09:11:27.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

