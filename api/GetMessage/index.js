module.exports = async function (context, req) {
  const date = "2024-07-28T13:11:03.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

