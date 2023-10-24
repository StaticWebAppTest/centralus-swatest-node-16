module.exports = async function (context, req) {
  const date = "2023-10-24T05:08:26.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

