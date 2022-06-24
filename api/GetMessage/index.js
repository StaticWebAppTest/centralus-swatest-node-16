module.exports = async function (context, req) {
  const date = "2022-06-24T14:08:45.803Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

