module.exports = async function (context, req) {
  const date = "2024-02-10T04:11:53.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

