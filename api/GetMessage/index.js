module.exports = async function (context, req) {
  const date = "2023-11-24T05:08:53.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

