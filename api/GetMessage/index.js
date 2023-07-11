module.exports = async function (context, req) {
  const date = "2023-07-11T03:15:18.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

