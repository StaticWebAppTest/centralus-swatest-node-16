module.exports = async function (context, req) {
  const date = "2023-05-24T05:08:20.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

